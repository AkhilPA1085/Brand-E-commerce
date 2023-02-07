import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-12">
          <div className="about">
            <h1 className="text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-3">
              <Link href="/about">about</Link>
            </h1>
            <p className="description text-xs text-black leading-4 font-semibold">
              We design wardrobe essentials with a strong silhouette, in tonal
              colorways. Our style never changes. It evolves. Continuously. Read
              more
            </p>
          </div>
          <div className="offer">
            <h1 className="text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-3">
              <Link href="/offer">offer</Link>
            </h1>
            <ul className="offer-links-list">
                <li className="offer-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Sales</Link>
                </li>
                <li className="offer-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Promotion</Link>
                </li>
                <li className="offer-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">gift cards</Link>
                </li>
            </ul>
          </div>
          <div className="help">
            <h1 className="text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-3">
              <Link href="/help">help</Link>
            </h1>
            <ul className="help-links-list">
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Shipping</Link>
                </li>
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Returns</Link>
                </li>
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">store location</Link>
                </li>
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Shipping</Link>
                </li>
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">Returns</Link>
                </li>
                <li className="help-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">store location</Link>
                </li>
            </ul>
          </div>
          <div className="company">
            <h1 className="text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-3">
              <Link href="/company">company</Link>
            </h1>
            <ul className="company-links-list">
                <li className="company-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">about</Link>
                </li>
                <li className="company-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">careers</Link>
                </li>
                <li className="company-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">contact</Link>
                </li>
            </ul>
          </div>
          <div className="follow">
            <h1 className="text-sm text-gray-700/[0.6] uppercase font-bold tracking-widest pb-3">
              <Link href="/follow">follow</Link>
            </h1>
            <ul className="follow-links-list">
                <li className="follow-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">instagram</Link>
                </li>
                <li className="follow-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">facebook</Link>
                </li>
                <li className="follow-links text-xs leading-6 text-black capitalize font-semibold">
                    <Link href="">LinkedIn</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
