import Link from 'next/link'

const FooterBottom = () => {
  return (
    <>
        <div className="max-w-screen-xl mx-auto pt-10 pb-4">
            <div className="grid grid-cols-3">
                <div className='left-footer-col text-xs text-black'>
                    <Link href="">© 2022 zMark All Trading Co</Link>
                </div>
                <div className='center-footer-col payment-links text-center flex justify-center items-center text-black text-xs'>
                    <Link href="">g-pay</Link>
                    <Link href="">paypal</Link>
                    <Link href="">g-pay</Link>
                </div>
                <div className='center-footer-col payment-links text-center flex justify-center items-center text-black text-xs'>
                    <Link href="">Terms & conditions | Privacy statement</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBottom