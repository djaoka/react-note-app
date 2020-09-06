export const wait = async (delay: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
};

export const encrypt = async (data: string) => {
    await wait(1000);
    return data;
}

export const decrypt = async (data: string) => {
    await wait(1000);
    return data;
}