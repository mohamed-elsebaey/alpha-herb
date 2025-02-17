"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// Maximum file size before compression (512KB)
const MAX_FILE_SIZE = 512000;

// Component for handling profile avatar with image upload and compression
export default function ProfileAvatar({
  imagePath,
  addButtons,
}: {
  imagePath: string;
  addButtons?: boolean;
}) {
  // State to store the current image path or data URL
  const [pickedImage, setPickedImage] = useState(imagePath || "");

  // Reference to the hidden file input
  const imageInput = useRef<HTMLInputElement>(null);

  // Trigger file input click when user clicks "Change picture"
  function handlePickClick() {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }

  // Compress image and return as data URL
  async function compressImage(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement('img');
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Maintain aspect ratio
          const aspectRatio = width / height;
          
          // Reduce dimensions if too large
          if (width > 1024) {
            width = 1024;
            height = width / aspectRatio;
          }

          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Compress image with 0.7 quality
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedDataUrl);
        };
      };
    });
  }

  // Handle image selection from file input
  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    
    const file = event.target.files[0];
    if (!file) {
      setPickedImage("");
      return;
    }

    // Compress image if size exceeds MAX_FILE_SIZE
    if (file.size > MAX_FILE_SIZE) {
      try {
        const compressedImage = await compressImage(file);
        setPickedImage(compressedImage);
        if (imageInput.current) {
          // Update input value with compressed image
          const dataTransfer = new DataTransfer();
          const blob = await fetch(compressedImage).then(r => r.blob());
          const compressedFile = new File([blob], file.name, { type: 'image/jpeg' });
          dataTransfer.items.add(compressedFile);
          imageInput.current.files = dataTransfer.files;
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while processing the image. Please try again.");
      }
    } else {
      // For smaller images, use directly without compression
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
      };
    }
  }

  // Reset image to default profile picture
  function handleDeleteImageChange() {
    setPickedImage("/profile-pictures/profile.png");
  }

  return (
    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
      {/* Display current profile image */}
      <Image
        className="object-cover w-32 h-32 p-1 rounded-full ring-2 ring-primary/40"
        src={pickedImage ? pickedImage : "/profile/profile.png"}
        alt="Profile"
        width={128}
        height={128}
      />

      {/* Hidden input to store picked image value */}
      <input
        hidden
        type="text"
        value={pickedImage}
        name="pickedImage"
        readOnly
      />

      {/* Hidden file input for image selection */}
      <input
        className="hidden"
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        name="image"
        ref={imageInput}
        //multiple
        onChange={handleImageChange}
        //required
      />

      {/* Conditional rendering of change/delete buttons */}
      {addButtons && (
        <div className="flex flex-col space-y-5 sm:ml-8">
          <button
            type="button"
            className="py-2 px-5 text-base font-medium text-white focus:outline-none bg-primary rounded-lg border border-primary/20 hover:bg-primary/90 focus:z-10 focus:ring-4 focus:ring-primary/20 "
            onClick={handlePickClick}
          >
            Change picture
          </button>
          <button
            type="button"
            className="py-2 px-5 text-base font-medium text-primary/90 focus:outline-none bg-white rounded-lg border border-primary/20 hover:bg-primary/10 hover:text-primary focus:z-10 focus:ring-4 focus:ring-primary/20 "
            onClick={handleDeleteImageChange}
          >
            Delete picture
          </button>
        </div>
      )}
    </div>
  );
}
