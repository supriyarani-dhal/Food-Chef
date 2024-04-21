export const isvalidName = (name) => {
  const checkName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

  if (!checkName) return "*the name is not valid";

  return null;
};

export const isvalidPhone = (phone) => {
  const checkPhone =
    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/.test(
      phone
    );

  if (!checkPhone) return "*the phone number is not valid";

  return null;
};
