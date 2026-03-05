"use client"

import { BaseURL } from '@/app/baseUrl';
import Heading from '@/app/components/common/Heading';
import { useEffect, useState, useMemo } from 'react'
import axios from "axios";
import SaveAndCancel from '@/app/components/common/SaveAndCancel';
import { MdEdit, MdDelete } from "react-icons/md";
import Loading from '@/app/components/Loading';
import toast from "react-hot-toast";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type Category = {
  _id: string
  name: string
  description: string
}

const Page = () => {
  const [data, setData] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [blogsPerPage] = useState(10)
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name?.toLowerCase().includes(search.toLowerCase())
    )
  }, [data, search])

  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(filteredData.length / blogsPerPage)

  const getCategories = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${BaseURL}/blog-category/read`)
      setData(res?.data?.data || [])
    } catch (error) {
      toast.error("Failed to fetch categories")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const createCategory = async () => {
    if (!formData.name.trim()) {
      return toast.error("Category name required")
    }
    try {
      const res = await axios.post(`${BaseURL}/blog-category/create`, formData)
      if (res?.data?.success) {
        toast.success("Category created")
        setOpenModal(false)
        setFormData({
          name: "",
          description: ""
        })
        getCategories()
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }

  const deleteCategory = async (id: string) => {
    try {
      const res = await axios.delete(`${BaseURL}/blog-category/delete/${id}`)
      if (res?.data?.success) {
        setData(prev => {
          const updated = prev.filter(item => item._id !== id)
          if ((currentPage - 1) * blogsPerPage >= updated.length) {
            setCurrentPage(prev => prev - 1)
          }
          return updated
        })
        toast.success("Category deleted")
      }
    } catch {
      toast.error("Delete failed")
    }
  }

  return (
    <div className="px-6 pb-6">
      <Heading title={"Blog Category"} />
      <div className="flex justify-between items-center mb-6">
        <div className="rounded-full w-1/4 border flex items-center">
          <input
            type="text"
            placeholder="Search Category..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full outline-none p-4 rounded-full text-sm"
          />
        </div>

        <SaveAndCancel
          name={"Create Blog Category"}
          isIcon={true}
          handleClick={() => setOpenModal(true)}
        />
      </div>

      {/* TABLE */}
      {loading ? (
        <Loading />
      ) : filteredData.length === 0 ? (
        <div className="pt-36 text-center">
          No categories found.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-12 bg-blue-900 p-4 font-semibold text-white text-sm uppercase">
            <div className="col-span-4">Category</div>
            <div className="col-span-6">Description</div>
            <div className="col-span-2 text-center">Actions</div>
          </div>

          {/* TABLE BODY */}
          {currentBlogs.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-12 items-center px-4 py-3 border-t hover:bg-blue-50 transition"
            >
              <div className="col-span-4 font-medium truncate">
                {item.name}
              </div>

              <div className="col-span-6 truncate">
                {item.description || "-"}
              </div>
              <div className="col-span-2 flex justify-center gap-3">
                <button className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full cursor-pointer">
                  <MdEdit size={20} />
                </button>

                <button
                  onClick={() => deleteCategory(item._id)}
                  className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full cursor-pointer"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          {filteredData.length > blogsPerPage && (
            <div className="flex justify-between items-center px-6 py-4 border-t bg-blue-50">
              <p className="text-sm">
                Showing {indexOfFirstBlog + 1} -
                {Math.min(indexOfLastBlog, filteredData.length)}
                of {filteredData.length}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  disabled={currentPage === 1}
                  className="p-3 bg-blue-900 text-white rounded-lg disabled:opacity-50"
                >
                  <IoIosArrowBack />
                </button>

                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="p-3 bg-blue-900 text-white rounded-lg disabled:opacity-50"
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* OVERLAY */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenModal(false)}
        />
      )}

      {/* RIGHT DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-105 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          openModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">
            Create Blog Category
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-md outline-none"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border p-3 rounded-md outline-none"
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setOpenModal(false)}
              className="px-4 py-2 border rounded-md cursor-pointer hover:border-red-600 hover:text-red-600"
            >
              Cancel
            </button>

            <button
              onClick={createCategory}
              className="px-4 py-2 bg-blue-900 text-white rounded-md cursor-pointer hover:bg-[#FB9100]"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;