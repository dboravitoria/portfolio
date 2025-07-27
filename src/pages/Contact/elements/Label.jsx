export default function Label({title}) {
  return (
    <>
        <label htmlFor={title} className="dark:text-white text-secondaryDark font-primary font-bold italic mb-2">
            {title}:
        </label>
    </>
  )
}
