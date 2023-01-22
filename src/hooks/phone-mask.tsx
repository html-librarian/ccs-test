export const phoneMask = (value: string) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d)/g, "+($1) $2");
    value = value.replace(/(\d)(\d{3})$/, "$1-$2");

    return value;
};