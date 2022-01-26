import Link from 'next/link'
import Script from 'next/script'
import Container from 'components/ui/Container'
//import {Cloudinary} from "@cloudinary/url-gen"

const ImgUpload = () =>  {

return (
<Container>
  <div id="upload_widget"></div>
<Script src="https://upload-widget.cloudinary.com/global/all.js" id="" onLoad={() => {

var myWidget = cloudinary.createUploadWidget({
  cloudName: "scratchwood",
    uploadPreset: "qimg_preset",
    sources: [
        "local",
        "url",
        "camera",
        "instagram",
        "facebook"
    ],
    googleApiKey: "<image_search_google_api_key>",
    showAdvancedOptions: false,
    cropping: false,
    multiple: false,
    defaultSource: "local",
    styles: {
        palette: {
            window: "#ffffff",
            sourceBg: "#FFFFFF",
            windowBorder: "#401F0E",
            tabIcon: "#000000",
            inactiveTabIcon: "#555a5f",
            menuIcons: "#2D3844",
            link: "#83889E",
            action: "#339933",
            inProgress: "#0433ff",
            complete: "#339933",
            error: "#cc0000",
            textDark: "#000000",
            textLight: "#fcfffd"
        },
        fonts: {
            default: null,
            "sans-serif": {
                url: null,
                active: true
            }
        }
    }
},
 (err, info) => {
   if (!err) {    
     console.log("Upload Widget event - ", info);
   }
  })
  


myWidget.open();

//document.getElementById("upload_widget").addEventListener("click", function(){
//  myWidget.open();
//}, false);

}} />
</Container>
)
}

export default ImgUpload

