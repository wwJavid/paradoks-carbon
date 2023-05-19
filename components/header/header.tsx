import Image from "next/image";

function Header() {
  return (
    <>
      <div>
        <div className="header--logo">
          <Image
            priority
            src="/assets/paradoks.svg"
            fill={true}
            alt="Paradoks"
          />

          <Image
            priority
            src="/assets/pd-logo.svg"
            fill={true}
            alt="Paradoks Logo"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
