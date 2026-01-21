import { Modal } from "../../../components/Modal";
import { TextField } from "@mui/material";
import { CustomAlert } from "../../../components/Alert";
import { useUpdatePokemon } from "../../../hooks/useUpdatePokemo";
import type { IPokemonDetail } from "../../../types/pokemon.interface";
import { useEffect } from "react";


export interface IUpdatePokemonProps {
  open: boolean;
  onClose: () => void;
  defaultValues?: IPokemonDetail;
}

export const UpdatePokemon = ({ open, onClose, defaultValues }: IUpdatePokemonProps) => {
  const { loading, message, setRequest, setMessage, updatePokemon, request } = useUpdatePokemon();

  useEffect(() => {
    if (defaultValues?.id) { setRequest({ ...request, id: defaultValues.id.toString() }); }
  }, [defaultValues]);

  const handleFieldChange = (field: string, value: string | number, isNumber: boolean = false) => {
    if (value === null || value === undefined || value === "") return;

    let finalValue = value;

    if (isNumber) {
      finalValue = Number(value);
      if (isNaN(finalValue)) return;
    }

    setRequest({
      ...request,
      [field]: finalValue
    });
  };

  return (
    <>
      <Modal
        open={open}
        title="Update Pokémon"
        onDismiss={onClose}
        onClickSuccess={() => { updatePokemon(); setTimeout(() => { onClose(); }, 5000); }}
      >
        <div>
          <TextField
            label="Pokémon's name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="name"
            defaultValue={defaultValues?.name}
            onChange={(x) => handleFieldChange("name", x.target.value)}
            placeholder="Ej: Pikachu"
            helperText="Text real pokemon name to add it."
          />
          <TextField
            label="Height"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            defaultValue={defaultValues?.height}
            name="height"
            onChange={(x) => handleFieldChange("height", x.target.value, true)}
            placeholder="Ej: 1.5"
            helperText="Text real pokemon height to add it."
          />
          <TextField
            label="Width"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="weight"
            defaultValue={defaultValues?.weight}
            onChange={(x) => handleFieldChange("weight", x.target.value, true)}
            placeholder="Ej: 1.5"
            helperText="Text real pokemon weight to add it."
          />
        </div>

        <CustomAlert
          open={!!message}
          message={message}
          status={loading ? 200 : 400}
          onClose={() => { setMessage(""); }}
        />
      </Modal>
    </>
  );
}