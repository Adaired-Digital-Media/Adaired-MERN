"use client";

import InputField from "@/app/components/UI/InputField";
import React, { useEffect, useState } from "react";
import Editor from "@/app/components/Editor";
import SelectField from "@/app/components/UI/SelectField";
import ImageUpload from "@/app/components/UI/ImageUpload";
import axios from "axios";
import { BaseURL, BaseURL2 } from "@/app/baseUrl";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface CategoryType {
  label: string;
  value: string;
}

const CreateBlog = ({ refresh }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const params = useParams();
  const blogId = params?.slug;
  const isEditMode = blogId !== "create";
  const [categoryOptions, setCategoryOptions] = useState<CategoryType[]>([]);
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [blog, setBlog] = useState<any>(null);
  const [inputVal, setInputVal] = useState({
    postTitle: "",
    slug: "",
    category: "",
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      focusKeyword: "",
    },
  });



  /* =============================
     Handle Normal + Nested Fields
  ============================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("seo.")) {
      const key = name.split(".")[1];

      setInputVal((prev) => ({
        ...prev,
        seo: {
          ...prev.seo,
          [key]: value,
        },
      }));
    } else {
      setInputVal((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  /* =============================
     Auto Slug Generate
  ============================== */
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputVal((prev) => ({
      ...prev,
      postTitle: value,
      slug: generateSlug(value),
    }));
  };

  /* =============================
     Image Upload
  ============================== */
  const handleImageUpload = (file: File) => {
    setSelectedFile(file);
  };

  /* =============================
     Submit Blog
  ============================== */
  const handleSubmit = async () => {
    const { postTitle, slug, category, seo } = inputVal;

    // ✅ Required validation
    if (
      !postTitle.trim() ||
      !slug.trim() ||
      !category ||
      !content.trim() ||
      !seo.metaTitle.trim() ||
      !seo.metaDescription.trim() ||
      !seo.keywords.trim() ||
      !seo.focusKeyword.trim()
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true)
      const formData = new FormData();

      formData.append("postTitle", inputVal.postTitle);
      formData.append("slug", inputVal.slug);
      formData.append("category", inputVal?.category || "699ecc40a530b0d473ebe68b");
      formData.append("postDescription", content);
      formData.append("seo", JSON.stringify(inputVal.seo));

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      if (isEditMode) {
        await axios.patch(`${BaseURL}/blog/update/${blogId}`, formData);
        toast.success("Blog updated successfully")
        setLoading(false)
        router.push("/admin/blog")

      } else {
        await axios.post(`${BaseURL}/blog`, formData);
        toast.success("Blog created successfully")
        setLoading(false)
        router.push("/admin/blog")
      }
    } catch (err: any) {
      console.log(err.response?.data || err.message);
    }
  };
  /* =============================
     Fetch Categories
  ============================== */
  const getCategories = async () => {
    try {
      const res = await axios.get(`${BaseURL}/blog-category/read`);

      if (res.status === 200) {
        const formatted = res.data?.data?.map((item: any) => ({
          label: item?.name,
          value: item?._id,
        }));

        setCategoryOptions(formatted);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSingleBlog = async () => {
    try {
      const res = await axios.get(`${BaseURL}/blog/${blogId}`);

      if (res.status === 200) {
        const blogData = res?.data?.data;
        setBlog(blogData)
        setInputVal({
          postTitle: blogData.postTitle,
          slug: blogData.slug,
          category: blogData.category,
          seo: blogData.seo || {
            metaTitle: "",
            metaDescription: "",
            keywords: "",
            focusKeyword: "",
          },
        });

        setContent(blogData.postDescription);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategories();
    if (isEditMode) {
      getSingleBlog();
    }
  }, []);

  return (
    <div className="space-y-6">
      <h3>{isEditMode ? "Update" : "Create"} Blog</h3>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3 space-y-4">
          <InputField
            name="postTitle"
            placeholder="Enter Heading"
            value={inputVal.postTitle}
            handleChange={handleTitleChange}
            required={true}
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              name="slug"
              placeholder="Enter Slug"
              value={inputVal.slug}
              handleChange={handleChange}
              required={true}
            />

            <SelectField
              name="category"
              value={inputVal.category}
              handleChange={handleChange}
              options={categoryOptions}
              required={true}
            />
          </div>
        </div>

        {/* <ImageUpload onUpload={handleImageUpload} /> */}
        <ImageUpload
          existingImage={blog?.featuredImage ?? blog?.seo?.openGraph?.image}
          onUpload={handleImageUpload}
        />
      </div>

      <Editor content={content} setContent={setContent} />

      {/* =============================
          SEO Section
      ============================== */}
      <div className="space-y-4">
        <p className="font-semibold">Meta Tags</p>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            name="seo.metaTitle"
            placeholder="Enter SEO Title"
            value={inputVal.seo.metaTitle}
            handleChange={handleChange}
            required={true}
          />

          <InputField
            name="seo.keywords"
            placeholder="Enter Keywords"
            value={inputVal.seo.keywords}
            handleChange={handleChange}
            required={true}
          />
        </div>

        <InputField
          name="seo.focusKeyword"
          placeholder="Enter Focus Keyword"
          value={inputVal.seo.focusKeyword}
          handleChange={handleChange}
          required={true}
        />

        <InputField
          name="seo.metaDescription"
          placeholder="Enter Description"
          value={inputVal.seo.metaDescription}
          handleChange={handleChange}
          required={true}
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          {isEditMode ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;