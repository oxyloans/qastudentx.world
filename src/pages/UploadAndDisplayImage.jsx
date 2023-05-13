import React from 'react'
import './change.css'  

import person from '../../src/assets/img/pesimage.png';

export default function UploadAndDisplayImage() {
     const handleclick =()=> {
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });
     }
  return (
    <div>
    
    <div className="avatar-upload">
        <div className="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label htmlFor="imageUpload"  onClick={handleclick}></label>
        </div>
        <div className="avatar-preview">
            <div id="imagePreview" style={{backgroundImage: `url("https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png")`}}>
            </div>
        </div>
    
</div></div>
  )
}
