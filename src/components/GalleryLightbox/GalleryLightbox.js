import React, {useState} from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Img from 'gatsby-image'
import CustomView from './CustomView'
import styles from './GalleryLightbox.module.scss'

const imgList = [{ source: 'path/to/image-1.jpg', source: 'path/to/image-2.jpg' }];

const GalleryLightbox = (images) => {

	const [modalIsOpen , setModalIsOpen] = useState(false)
	const [ selectedIndex, setSelectedIndex] = useState(0)
	console.log(images)

	 const PHOTO_SET = images.images.map((image, i) => {
    // creer 2 juex de données un pour lightbox (fullsize) l'autre pour gallery (thumbnails , c'est celui-ci)
    // pour cela : modifier la requele graphql en bas, la list des props en haut et passer en prop les 2 listes au composant GalleryLightbox
      return {
        src: image.fluid.src,
        srcSet: image.fluid.srcSet,
       
        caption:image.description,
        alt: image.description,
        width: image.file.details.image.width,
        height: image.file.details.image.height,
        fluid: image.fluid
      }
  });


	return (
			<div>
			{/*<b>modalIsOpen : </b> {modalIsOpen ? 'true' : 'false'}
			<br/>
			<b>selectedIndex : </b> {selectedIndex}*/}
			
			
            <div>
	            {images.images.map((img , j) => (
	              <div onClick={ () => { setModalIsOpen(!modalIsOpen),setSelectedIndex(j)}} key={j} className={styles.listingImageItem}>
	                <Img
	                  alt={img.description}
	                  fluid={img.thumbnails}
	                />
	                  <figcaption>{img.description}</figcaption>
	              </div>
	            ))}
            </div>
            <ModalGateway>
	          {modalIsOpen ? (
	            <Modal onClose={() => setModalIsOpen(!modalIsOpen)}>
	              <Carousel
	               /* components={{ Footer: null, View: CustomView }}*/
	                currentIndex={selectedIndex}
	              /*  formatters={{ getAltText }}*/
	                frameProps={{ autoSize: 'height' }}
	                views={PHOTO_SET}
	              />
	            </Modal>
	          ) : null}
	        </ModalGateway>
        		

			</div>
			)

}

export default GalleryLightbox