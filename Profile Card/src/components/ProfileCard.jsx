import './ProfileCard.css'
import Me from './Me.jpg'
const ProductCard = () => {
  return (
    <div className='profile-card'>
      <div className='top-section'>
        <img src={Me} alt='Me' className='profile-img' />
      </div>
      <div  className='bottom-section'>
        <h2>Andria Lezhava</h2>
        <p  className='title'>Profile Card</p>
        <p  className='description'>
          I choice React cause its faster and better performance.
        </p>
        <div  className='social-icons'>
        <a href="https://www.instagram.com/andria.lezhava/" className='social-icon'>Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100024693697235" className='social-icon'>Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard