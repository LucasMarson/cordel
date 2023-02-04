import { Carrossel } from "../Carrossel";

export function Header() {
  return (
    <div className="w-full p-2 items-center justify-cente fixed z-50 bg-white drop-shadow-2xl">
      <div className="w-auto">
          <Carrossel />
      </div>
    </div>
  );
}
