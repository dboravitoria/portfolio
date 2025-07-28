export default function Input({ type, title, placeholder }) {
  const isTextarea = type === "textarea";

  const inputClasses = `
    rounded-full ml-2 backdrop-blur-md
    p-2 shadow-lg drop-shadow-custom mb-4 text-secondaryDark dark:text-white
    dark:shadow-white/10 dark:bg-white/5 border-2 border-secondaryDark/10
    shadow-secondaryDark bg-secondaryDark/10
  `;

  const textareaClasses = `
    rounded-xl ml-2 backdrop-blur-md 
    p-2 h-40 shadow-lg drop-shadow-custom mb-2 text-secondaryDark dark:text-white block mx-auto
    dark:shadow-white/10 dark:bg-white/5 border-2 border-secondaryDark/10
    shadow-secondaryDark bg-secondaryDark/10
    w-3/4
  `;

  return isTextarea ? (
    <textarea
      name={title}
      id={title}
      placeholder={placeholder}
      className={textareaClasses}
    />
  ) : (
    <input
      type={type}
      name={title}
      id={title}
      placeholder={placeholder}
      className={inputClasses}
    />
  );
}
