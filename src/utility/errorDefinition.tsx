const errorDefinition = (inValidAt: number): string => {
    let error;

    switch (inValidAt) {
        case 0:
            error = "year"
            break;
        case 1:
            error = "month"
            break;
        case 2:
            error = "day"
            break;
        default:
            error = "check written date to match correct form"
    }

    return error;
};

export default errorDefinition;