const primaryBtn = ({title,mobileWidth,largeWidth}: { title: string,mobileWidth:string,largeWidth:string }) => {
  return (
    <div className={(`bg-[linear-gradient(104deg,#2a7f62_28%,#31ae83_100%)] text-white lg:w-${largeWidth} w-${mobileWidth}  rounded-[30px]`)}>
      {title}
    </div>
  )
}

export default primaryBtn
