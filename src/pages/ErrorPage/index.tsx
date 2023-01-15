import { useNavigate, isRouteErrorResponse, useRouteError } from "react-router-dom";
import style from "./style.module.scss";

export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    if (isRouteErrorResponse(error)) {
        return (
            <div className={style.error_page}>
                <h1>{error.status}</h1>
                <h2>{error.statusText}</h2>
                {error.data?.message && <p>{error.data.message}</p>}
                {/* TODO Сделать компонент кнопки */}
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >Вернуться на главную</button>
            </div>
        );
    } else {
        return <div>Oops</div>;
    }
};