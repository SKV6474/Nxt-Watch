import { observer } from "mobx-react";

import { Props, UserDeatailsType } from "../../../Nxtwatch/interface";
import LoginComponent from "../../../Nxtwatch/components/Login";

import { LoginApi } from "../../services/AuthService/index.api";

const LoginRoute = observer((props: Props) => {
  const handleSubmit = async (userDetails: UserDeatailsType) => {
    return await LoginApi(userDetails, props);
  };

  return <LoginComponent onSubmitForm={handleSubmit} HistoryProp={props} />;
});
export default LoginRoute;
