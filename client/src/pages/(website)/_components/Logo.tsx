import logo from '../../../assets/images/logoWebsite.png'

const Logo = () => {
  return (
    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
    <a href="/" className="block w-40 lg:w-[200px]">
        <img src={logo} className=" w-full h-auto object-contain" />
    </a>
</div>
  )
}

export default Logo