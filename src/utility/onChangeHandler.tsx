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
    setValue: React.Dispatch<React.SetStateAction<string>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setClickedDate: React.Dispatch<React.SetStateAction<IClickedDate>>,
    setIsClicked: React.Dispatch<React.SetStateAction<IIsClicked>>): void => {

    const value = event.target.value;
    setValue(value);
    let date = "";
    let month = "";
    let year = "";
    let dateFormatCheck;
    let dateIsValid;
    let invalidAt;
    const errorNote = "Please check entered "

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
                error = "Please check date forma!t"
            default:
                error = "Date doesn't match format!"
        }

        return error;
    };

    if (value.length === 10) {
        setErrorMessage("");
        if (dateFormat === "YYYY/MM/DD") {
            dateFormatCheck = moment(value, 'YYYY/MM/DD', true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                date = value.charAt(8) + value.charAt(9);
                month = value.charAt(5) + value.charAt(6);
                year = value.charAt(0) + value.charAt(1) + value.charAt(2) + value.charAt(3);
            }
            else {
                invalidAt = dateFormatCheck.invalidAt();
                setErrorMessage(errorNote + errorDefinition(invalidAt));
            }
        }

        if (dateFormat === "DD/MM/YYYY") {
            dateFormatCheck = moment(value, "DD/MM/YYYY", true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                date = value.charAt(0) + value.charAt(1);
                month = value.charAt(3) + value.charAt(4);
                year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
            } else {
                invalidAt = dateFormatCheck.invalidAt();
                setErrorMessage(errorNote + errorDefinition(invalidAt));
            }
        }

        if (dateFormat === "MM/DD/YYYY") {
            dateFormatCheck = moment(value, "MM/DD/YYYY", true);
            dateIsValid = dateFormatCheck.isValid();

            if (dateIsValid === true) {
                month = value.charAt(0) + value.charAt(1);
                date = value.charAt(3) + value.charAt(4);
                year = value.charAt(6) + value.charAt(7) + value.charAt(8) + value.charAt(9);
            } else {
                invalidAt = dateFormatCheck.invalidAt();
                setErrorMessage(errorNote + errorDefinition(invalidAt));
            }
        }
        setClickedDate({ year: +year, month: +month, date: +date });
        setIsClicked({ buttonId: +date < 10 ? `button-${date.charAt(1)}` : `button-${date}`, selected: true });
    }

    if (value.length > 10) {
        setErrorMessage(errorDefinition(3));
    }
};

export default onChangeHandler;