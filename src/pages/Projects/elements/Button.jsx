
export default function Button({ href, children }) {
  return (
    <button
      className="text-secondaryDark border-secondaryDark/15 rounded-full block mx-auto p-2 border-2 bg-secondaryDark/10
                 hover:bg-secondaryDark/20 hover:transition-all hover:scale-105 hover:drop-shadow-custom
                 backdrop-blur-md shadow-custom transition cursor-pointer font-primary font-bold text-sm md:text-md"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </button>
  );
}
