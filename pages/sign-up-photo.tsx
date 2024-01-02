import Image from "next/image";
import Link from "next/link";
import { getGameCategory } from "@/services/palyer";
import React, { useCallback, useEffect, useState } from "react";
import { CategoryTypes } from "@/services/data-types";
import { Button } from "@/stories/Button";
import { setSignUp } from "@/services/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalFrom] = useState({
    name: '',
    email: '',
  });

  const router = useRouter();

  const getCategoryList = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    console.log(data);
  }, [getGameCategory]);

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    setLocalFrom(JSON.parse(getLocalForm));
  }, []);
  const onSubmit = async() => {

    if (!image || !favorite) {
      toast.error('Data photo dan favorite wajid diisi!!');
    }

  const localForm = await localStorage.getItem('user-form');
  const form = JSON.parse(localForm);
  const data = new FormData();

  data.append('image', image);
  data.append('email', form.email);
  data.append('password', form.password);
  data.append('phoneNumber', '083119482925');
  data.append('username', form.name);
  data.append('name', form.name);
  data.append('role', 'user');
  data.append('status', 'Y')
  data.append('favorite', favorite);

  const result = await setSignUp(data);
  if (result?.error === 1) {
    toast.error(result.message);
  }else {
    toast.success('Register Berhasil');
    router.push('/sign-up-success');
    localStorage.removeItem('user-form');
  }

  };

  return (
    <>
      {/* <!-- Sign Up Photo --> */}
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                        {imagePreview 
                        ? <img src={imagePreview} className="img-upload" alt="upload" /> 
                        : <Image src={"icon/upload.svg"} height={120} width={120} alt="upload"/> }
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img = event.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {localForm.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                 {localForm.email}
                </p>
                <div className="pt-50 pb-50">
                  <label className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    onChange={(event) => setFavorite(event.target.value)}
                    required
                  >
                    <option selected>Please Choose Category</option>
                    {categories.map((category: CategoryTypes) => (
                      // eslint-disable-next-line react/jsx-key
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  type="button"
                  onClick={onSubmit}
                  role="button"
                >
                  Create My Account
                </button>
                {/* <!-- <button type="submit" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button">Create My Account</button> --> */}
                <Link
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
