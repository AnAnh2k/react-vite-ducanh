import { Input, InputNumber, Modal, notification, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  handleUploadFileBook,
  updateBookAPI,
} from "../../services/api.service";

const UpdateBook = (props) => {
  const {
    isModalOpenBookUpdate,
    setIsModalOpenBookUpdate,
    dataUpdate,
    setDataUpdate,
    loadBook,
  } = props;
  const [id, setId] = useState("");
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [previewThumbnail, setPreviewThumbnail] = useState(null);

  useEffect(() => {
    if (dataUpdate && dataUpdate._id) {
      setMainText(dataUpdate.mainText);
      setAuthor(dataUpdate.author);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setCategory(dataUpdate.category);
      setId(dataUpdate._id);
      setPreviewThumbnail(
        `${import.meta.env.VITE_BACKEND_URL}/images/book/${dataUpdate.thumbnail}`,
      );
    }
  }, [dataUpdate]);

  const updateBook = async (newThumbnail) => {
    const resBook = await updateBookAPI(
      id,
      newThumbnail,
      mainText,
      author,
      price,
      quantity,
      category,
    );
    if (resBook.data) {
      resetAndCloseModal();
      await loadBook();
      notification.success({
        message: "Update book",
        description: "Update book successfully",
      });
    } else {
      notification.error({
        message: "Update book failed",
        description: JSON.stringify(resBook.message),
      });
    }
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

  const handleSubmitBtn = async () => {
    //không có ảnh preview + không có file => return
    if (!selectedThumbnail && !previewThumbnail) {
      notification.error({
        message: "Error update book",
        description: "Vui lòng upload ảnh thumbnail",
      });
      return;
    }

    let newThumbnail = "";
    //có ảnh preview và không có file => không upload file
    if (!selectedThumbnail && previewThumbnail) {
      newThumbnail = dataUpdate.thumbnail;
    } else {
      //có ảnh preview và có file => upload file
      const resUpload = await handleUploadFileBook(selectedThumbnail, "book");

      if (resUpload.data) {
        //success
        newThumbnail = resUpload.data.fileUploaded;
        //step 2: update user with new avatar
      } else {
        //failed
        notification.error({
          message: "Upload file failed",
          description: JSON.stringify(resUpload.message),
        });
        return;
      }
    }

    //step 2 update book
    await updateBook(newThumbnail);
  };

  const resetAndCloseModal = () => {
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setId("");
    setIsModalOpenBookUpdate(false);
    setDataUpdate(null);
  };
  return (
    <Modal
      title="Update a User"
      open={isModalOpenBookUpdate}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      okText="SAVE"
      maskClosable={false}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>ID</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Title</span>
          <Input
            placeholder="Title"
            value={mainText}
            onChange={(event) => setMainText(event.target.value)}
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
              <p style={{ marginBottom: "20px" }}>Thumbnail:</p>
              <img
                style={{
                  height: "150px",
                  width: "150px",
                  objectFit: "cover",
                  border: "1px solid #ccc",
                }}
                src={previewThumbnail}
                alt="Thumbnail"
              />
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default UpdateBook;
