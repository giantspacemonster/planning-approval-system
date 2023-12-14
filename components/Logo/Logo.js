export default function Logo({ width, height }) {
  return (
    <div>
      <img
        src="/LogoTemplate.svg"
        height={height}
        width={width}
        alt="OBPAS LOGO"
        loading="lazy"
        className="shadow"
      />
    </div>
  );
}
