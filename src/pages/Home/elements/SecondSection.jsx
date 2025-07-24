import WrapperBlur from "./WrapperBlur";

export default function SecondSection() {
  return (
    <section
      className="
        w-full
        flex
        items-center
        justify-center
        sm:flex
        md:max-w-[70%]
        md:mt-0
        md:h-full
        md:items-center
        lg:mb-0
      "
    >
      <WrapperBlur />
    </section>
  );
}
