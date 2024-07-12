import { X, User, AtSign } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void
  setOwnerEmail: (email: string) => void
}
export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              {" "}
              <X className="size-5 text-zinc-400" />{" "}
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação de viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Osasco - São Paulo, Brasil
            </span>
            , nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              14 de Agosto de 2025 até 15 de Agosto de 2026
            </span>
            , preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />

            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 ouline-none flex-1"

              onChange={event => setOwnerName(event.target.value)}
            ></input>
          </div>

          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <AtSign className="text-zinc-400 size-5" />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 ouline-none flex-1"

              onChange={event => setOwnerEmail(event.target.value)}
            ></input>
          </div>

          <Button type="submit" variant="primary">
            Confirmar criação de viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
