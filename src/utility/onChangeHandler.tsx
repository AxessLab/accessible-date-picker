import moment from "moment";

interface IClickedDate {
    date?: number;
    month?: number;
    year?: number;
}

interface IIsClicked {
    buttonId: string,
    selected: boolean
}

interface IIsClicked {
    buttonId: string,
    selected: boolean
}

const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    dateFormat: string,
    validation: boolean,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setClickedDate: React.Dispatch<React.SetStateAction<IClickedDate>>,
    setIsClicked: React.Dispatch<React.SetStateAction<IIsClicked>>): void => {

    const value = event.target.value;
    setValue(value);

    let date = "";
    let month = "";
    let year = "";
    let validataionChecker;

    const errorDefinition = (inValidAt: number): string => {
        let error;

        switch (inValidAt) {
            case 1:
                error = "month!"
                break;
            case 2:
                error = "day!"
                break;
            case 3:
                error = "Please check date format!"
            default:
                error = "Date doesn't match format!"
        }

        return error;
    };

    const validateDateFormat = (targetValue: string, dateFormat: string) => {
        const dateFormatCheck = moment(targetValue, dateFormat, true);
        const dateIsValid = dateFormatCheck.isValid();
        if (dateIsValid === true) {
            return true;
        }
        else {
            const invalidAt = dateFormatCheck.invalidAt();
            const errorNote = "Please check entered ";
            validation ? setErrorMessage(errorNote + errorDefinition(invalidAt)) : null;
        }
    };

    const yearChecker = (year: string) => {
        return `20${year}`
    };

    if (value.length === 8) {
        if (dateFormat === "DD/MM/YY") {
            validataionChecker = validateDateFormat(value, "DD/MM/YY");

            if (validataionChecker === true) {
                date = value.slice(0, 2);
                month = value.slice(3, 5);
                year = value.slice(6, 8);
            }
        }

        if (dateFormat === "MM/DD/YY") {
            validataionChecker = validateDateFormat(value, "MM/DD/YY");

            if (validataionChecker === true) {
                date = value.slice(3, 5);
                month = value.slice(0, 2);
                year = value.slice(6, 8);
            }
        }

        setClickedDate({ year: +yearChecker(year), month: +month, date: +date });
        setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
    }

    if (value.length === 10) {
        setErrorMessage("");

        if (dateFormat === "YYYY/MM/DD") {
            validataionChecker = validateDateFormat(value, "YYYY/MM/DD");

            if (validataionChecker === true) {
                date = value.slice(8, 10);
                month = value.slice(5, 7);
                year = value.slice(0, 4);
            }
        }

        if (dateFormat === "YYYY/DD/MM") {
            validataionChecker = validateDateFormat(value, "YYYY/DD/MM");

            if (validataionChecker === true) {
                date = value.slice(5, 7);
                month = value.slice(8, 10);
                year = value.slice(0, 4);
            }
        }

        if (dateFormat === "DD/MM/YYYY") {
            validataionChecker = validateDateFormat(value, "DD/MM/YYYY");

            if (validataionChecker === true) {
                date = value.slice(0, 2);
                month = value.slice(3, 5);
                year = value.slice(6, 10);
            }
        }

        if (dateFormat === "MM/DD/YYYY") {
            validataionChecker = validateDateFormat(value, "MM/DD/YYYY");

            if (validataionChecker === true) {
                date = value.slice(3, 5);
                month = value.slice(0, 2);
                year = value.slice(6, 10);
            }
        }

        setClickedDate({ year: +year, month: +month, date: +date });
        setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
    }

    if (value.length > dateFormat.length) {
        validation ? setErrorMessage(errorDefinition(3)) : null;
    }
};

export default onChangeHandler;