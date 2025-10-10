const Footer = () => {
  return (
    <footer className="w-full bg-white/90 border-t">
      <div className="max-w-[95%] mx-auto py-6 text-sm text-gray-800 flex flex-col md:flex-row justify-between gap-3 items-center">
        <div className="flex items-center gap-1">
          <span>Created with</span>
          <span className="text-red-500">❤️</span>
          <span>by</span>
          <a
            href="https://github.com/AyKrimino"
            target="_blank"
            rel="noreferrer"
            className="font-medium hover:underline text-gray-800"
          >
            Ayoub Krimi
          </a>
        </div>

        <div className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} Resume Generator — Built with Next.js &
          NestJS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
