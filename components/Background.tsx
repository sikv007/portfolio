export function Background() {
  return (
    <div className="blur-[10rem] opacity-20 pointer-events-none absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <svg viewBox="0 0 100 100" className="absolute text-purple-500" xmlns='http://www.w3.org/2000/svg'>
        <circle cx='50%' cy='50%' r='50%' fill="currentColor" />
      </svg>
      <svg viewBox="-20 0 100 100" className="absolute text-emerald-400" xmlns='http://www.w3.org/2000/svg'>
        <circle cx='30%' cy='30%' r='30%' fill="currentColor" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute text-blue-500" xmlns='http://www.w3.org/2000/svg'>
        <circle cx='20%' cy='20%' r='20%' fill="currentColor" />
      </svg>
  
    </div>
  );
}
