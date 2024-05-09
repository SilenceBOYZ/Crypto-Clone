function Container({ children, diplay = "", lazyLoading = false }) {
  let loadingClass = "";
  if (lazyLoading) {
    return (
      <div className={`max-w-[1300px] avg:px-[6rem] px-7 mx-auto h-full ${!diplay.length ? "" : diplay} lg:px-12 ${loadingClass} mobile:px-10`} data-section>
        {children}
      </div>
    )
  }
  return (
    <div className={`max-w-[1300px] avg:px-[6rem] px-7 mx-auto h-full ${!diplay.length ? "" : diplay} lg:px-12 ${loadingClass} mobile:px-10`} >
      {children}
    </div>
  )
}

export default Container
