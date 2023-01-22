import { memo } from "react";
import Button from "../../Button";
import { Input } from "../components/Input";
import style from "./style.module.scss";

export const Subscribe = memo(() => {
    return (
        <div className={style.subscribe}>
            <form action="" className={style.subscribe_form}>
                <Input
                    name="subscribe"
                    placeholder="Your E-mail"
                    className={style.subscribe_form_input}
                    type="email"
                    required
                />
                <Button smallSize type="button">
                    Subscribe
                </Button>
            </form>
        </div>
    );
});