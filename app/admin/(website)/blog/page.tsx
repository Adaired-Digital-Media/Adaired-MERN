"use client"
import { BaseURL } from '@/app/baseUrl';
import Heading from '@/app/components/common/Heading';
import { useEffect, useState } from 'react'
import axios from "axios";
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import { useRouter } from 'next/navigation';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Loading from '@/app/components/Loading';
import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data?.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(data.length / blogsPerPage);

  const getBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BaseURL}/blog/get`)

      if (res?.status === 200) {
        const blogsArray = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];

        setData(blogsArray);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err)
    }

  }
  useEffect(() => {
    getBlogs()
  }, [])

  const deleteBlog = async (id: string) => {
    try {
      setLoading(true)
      const res = await axios.delete(`${BaseURL}/blog/delete/${id}`)

      if (res?.status === 200) {
        setData((prev: any) => prev.filter((blog: any) => blog._id !== id))
        toast.success("Blog deleted successfully")
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="px-6 pb-6">
      <div className="flex justify-between items-center mb-4">
        <Heading subTitle={"Blog"} title={"Blog List"} />
        <SaveAndCancel
          name={"Create Blog"}
          isIcon={true}
          handleClick={() => router.push("/admin/blog/create")}
        />
      </div>
      {loading ? <Loading /> : <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="grid grid-cols-12 bg-blue-900 p-4 font-semibold text-white text-sm uppercase">
          <div className="col-span-11">Title</div>
          <div className="col-span-1 text-center">Actions</div>
        </div>

        {data?.length > 0 ? (
          currentBlogs.map((blog: any) => (
            <div
              key={blog._id}
              className="grid grid-cols-12 items-center px-4 py-3 border-t hover:bg-blue-50 transition duration-200"
            >
              <div className="col-span-11 font-medium text-gray-800 truncate">
                {blog?.postTitle}
              </div>

              <div className="col-span-1 flex justify-center gap-3">

                <button
                  onClick={() => router.push(`/admin/blog/${blog.slug}`)}
                  className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition active:scale-90"
                >
                  <MdEdit size={20} />
                </button>

                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition active:scale-90"
                >
                  <MdDelete size={20} />
                </button>

              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-gray-500">
            No blogs found. Click "Create Blog" to add one.
          </div>
        )}

        {/* Pagination */}
        {data.length > 10 && (
          <div className="flex justify-between items-center px-6 py-4 border-t bg-blue-50">

            <p className="text-sm text-gray-600">
              Showing {indexOfFirstBlog + 1} to{" "}
              {Math.min(indexOfLastBlog, data.length)} of {data.length} blogs
            </p>

            <div className="flex gap-2">

              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition active:scale-90 ${currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#FB9100]/90 text-white hover:bg-[#FB9100] cursor-pointer"
                  }`}
              >
                Previous
              </button>

              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition active:scale-90 ${currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                  }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>}

    </div>
  );
}

export default Page;