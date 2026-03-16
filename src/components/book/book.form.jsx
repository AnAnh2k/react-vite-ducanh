import { Button, Input, InputNumber, Modal, notification, Select } from "antd";
import React, { useState } from "react";
import {
  createBookAPI,
  handleUploadFile,
  handleUploadFileBook,
} from "../../services/api.service";

const BookForm = (props) => {
  const { loadBook } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [isModalOpenNewBook, setIsModalOpenNewBook] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [previewThumbnail, setPreviewThumbnail] = useState(null);

  const resetAndCloseModal = () => {
    setTitle("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setIsModalOpenNewBook(false);
    setSelectedThumbnail(null);
    setPreviewThumbnail(null);
  };

  const handleOnchangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedThumbnail(null);
      setPreviewThumbnail(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedThumbnail(file);
      setPreviewThumbnail(URL.createObjectURL(file));
    }
  };

  const handleCreateBookThumbnail = async () => {
    //step 1: upload file to

    if (!selectedThumbnail) {
      notification.error({
        message: "Create book failed",
        description: "Thumbnail is required",
      });
      return;
    }

    const resUpload = await handleUploadFileBook(selectedThumbnail, "book");

    if (resUpload.data) {
      const newThumbnail = resUpload.data.fileUploaded;
      //step 2: update user with new avatar
      const resCreateBook = await createBookAPI(
        newThumbnail,
        title,
        author,
        price,
        quantity,
        category,
      );
      if (resCreateBook.data) {
        setIsModalOpenNewBook(false);
        setSelectedThumbnail(null);
        setPreviewThumbnail(null);
        await loadBook();

        notification.success({
          message: "Create book",
          description: "Create book successfully",
        });
      } else {
        notification.error({
          message: "Create book failed",
          description: JSON.stringify(resCreateBook.message),
        });
      }
    } else {
      notification.error({
        message: "Upload file failed",
        description: JSON.stringify(resUpload.message),
      });
    }
  };

  return (
    <div className="user-form" style={{ margin: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Books</h3>
        <Button
          type="primary"
          onClick={() => {
            setIsModalOpenNewBook(true);
          }}
        >
          Create Book
        </Button>
      </div>
      <Modal
        title="Create New Book"
        open={isModalOpenNewBook}
        onOk={() => handleCreateBookThumbnail()}
        onCancel={() => resetAndCloseModal()}
        okText="Create"
        maskClosable={false}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Title</span>
            <Input
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <span>Author</span>
            <Input
              placeholder="Author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div>
            <span>Price</span>
            <InputNumber
              suffix="Đ"
              style={{ width: "100%" }}
              placeholder="Price"
              value={price}
              onChange={(event) => {
                setPrice(event);
              }}
            />
          </div>
          <div>
            <span>Quantity</span>
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Quantity"
              value={quantity}
              onChange={(event) => {
                setQuantity(event);
              }}
            />
          </div>
          <div>
            <span>Category</span>
            <Select
              placeholder="Category"
              value={category}
              style={{ width: "100%" }}
              onChange={(value) => setCategory(value)}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Business", label: "Business" },
                { value: "Comics", label: "Comics" },

                { value: "Cooking", label: "Cooking" },
                { value: "Entertainment", label: "Entertainment" },
                { value: "History", label: "History" },

                { value: "Music", label: "Music" },
                { value: "Sports", label: "Sports" },
                { value: "Teen", label: "Teen" },
                { value: "Travel", label: "Travel" },
              ]}
            />
          </div>
          <div>
            <label
              htmlFor="thumbnail"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "8px 18px",
                background: "#1677ff",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Upload thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              onChange={(event) => {
                handleOnchangeFile(event);
              }}
              onClick={(event) => {
                event.target.value = null;
              }}
              hidden
            />
          </div>
          {previewThumbnail && (
            <>
              <div>
                <p style={{ marginBottom: "20px" }}>Preview:</p>
                <img
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "cover",
                    border: "1px solid #ccc",
                  }}
                  src={previewThumbnail}
                  alt="Preview"
                />
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default BookForm;
