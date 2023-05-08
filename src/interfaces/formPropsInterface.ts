import {FormEvent} from "react";

export interface IFormProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>, inputValue: string) => void;
}