import React from "react";

export default (): JSX.Element => {
  return (
    <>
      <label htmlFor="databaseEntry">Enter new database </label>
      <br></br>
      <input type="text" name="databaseEntry" placeholder="This is a placeholder" />
      <input type="submit" value="submit" />
    </>
  );
};
