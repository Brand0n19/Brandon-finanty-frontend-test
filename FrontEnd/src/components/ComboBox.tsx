import { Autocomplete, TextField } from "@mui/material";
import type { IComboBox, ISelectOption } from "../types/comboBox.interface";
import { useState } from "react";


export const ComboBox = (props: IComboBox) => {
    const [value, setValue] = useState<ISelectOption | null>(null);

    return (
        <Autocomplete
            disablePortal
            options={props.options ?? []}
            size={props.size ?? 'small'}
            value={value}
            fullWidth={props.fullWidth ?? true}
            disabled={props.disable ?? false}
            sx={{ width: props.width ?? 300 }}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(_event, newValue) => {
                props.onValueChange(newValue?.id ?? "");
                setValue(newValue ?? null)
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    placeholder={props.placeholder}
                    variant="outlined"
                />
            )}
        />
    );
}