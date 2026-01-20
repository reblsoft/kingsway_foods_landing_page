import React from 'react'
import ModalLayout from './ModalLayout'

interface DownloadAppModalProps {
  onClose: () => void;
}

const DownloadAppModal = ({ onClose }: DownloadAppModalProps) => {
  return (
    <ModalLayout onClose={onClose}>
      <div className="flex flex-col rounded-[20px] lg:h-[500px] md:h-[560px] h-[560px] bg-[#32a071] md:w-[500px] lg:w-[800px] xl:md:w-[1133px] w-[320px] mx-auto max-w-[95vw]">
        <div className="lg:w-11/12 w-10/12 flex m-auto lg:items-end items-center max-lg:flex-col-reverse gap-6 lg:gap-10 lg:h-full  max-lg:justify-center">
          <div className="flex flex-col lg:self-center lg:gap-16 gap-8 md:gap-10 items-end w-full lg:w-auto">
            <div className="flex flex-col gap-5 md:gap-6 text-left items-start">
              <h1 className="xl:text-[38px] lg:text-3xl md:text-2xl text-xl font-semibold capitalize text-white leading-tight">
                the innovative way to Order Food
              </h1>
              <p className="font-normal text-sm md:text-base lg:text-lg text-white leading-relaxed">
                When you join us you will enjoy our new and improved way of ordering through our virtual Kitchen experience
              </p>
            </div>

            <div className="flex lg:hidden gap-4 md:gap-6 justify-start items-center w-full">
              <div className="w-28 md:w-36 lg:w-[166px] h-auto flex-shrink-0">
                <img src="/images/googlePlay.png" alt="" className="w-full h-auto" />
              </div>
              <div className="w-28 md:w-36 lg:w-[166px] h-auto flex-shrink-0">
                <img src="/images/appStore.png" alt="" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 md:w-2/3 w-full flex justify-start  max-lg:justify-center max-lg:items-center">
            <img src="/images/qrcode.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </ModalLayout>
  )
}

export default DownloadAppModal
