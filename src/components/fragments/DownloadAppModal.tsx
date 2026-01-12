import React from 'react'
import ModalLayout from './ModalLayout'

const DownloadAppModal = () => {
  return (
    <ModalLayout>
      <div className="flex max-lg:flex-col rounded-[20px] lg:max-h-[560px] max-h-5/6 md:max-h-[500px] xl:max-h-[500px] h-full bg-[#32a071]  lg:max-w-fit md:max-w-[1133px] max-w-[360px] w-full">
      <div className="flex flex-col gap-16 items-start">
        <div className="flex flex-col gap-5.5 text-left items-start">
          <h1 className="xl:text-[38px] lg:text-3xl md:text-xl text-lg font-semibold capitalize text-white">
            the innovative way to Order Food
          </h1>

          <p className="font-normal text-sm md:text-base text-white">When you join us you will enjoy our new and improved way of ordering through our virtual Kitchen experience</p>
        </div>

        <div className="lg:hidden flex gap-4 justify-start items-center w-full">
          <div className="max-w-32 w-full h-auto">
            <img src="/images/googlePlay.png" alt="" className="" />
          </div>
          <div className="max-w-32 w-full h-auto">
            <img src="/images/appStore.png" alt="" className="" />
          </div>
        </div>
      </div>

      <div className="max-w-1/2 w-full flex justify-start">
        <img src="/images/qrcode.png" alt="" className="w-full h-full" />
      </div>
      </div>
    </ModalLayout>
  )
}

export default DownloadAppModal
