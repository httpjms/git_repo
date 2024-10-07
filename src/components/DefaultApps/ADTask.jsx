import CopyButton from "./CopyButton";

const ADTask = ({ employee }) => {
  let defaultApp = "";

  if (employee.selectedCountry === "IN") {
    defaultApp =
      "AAD_Sync;Okta_Intranet_IN_User;Okta_Litmos_IN_Users;Okta_Percipio_IN_Users;Okta_SwireConnect_IN_Users;Okta_Ideation_Portal_Users;Okta_Citrix_IN_Users;Okta_Concur_IN_Users;Okta_GiftsAndHospitality_Prod_Users;Okta_corp_philanthropy_Prod_Users;Okta_Data_Asset_Register_Prod;Okta_Zendesk_SS_KB_Prod_Users;Okta_ME_Users;Okta_Ramco_Prod_Users;Okta_VirtualGratitude_IN_Users;Okta_Coruson_Prod_users;Okta_Coruson_Train_users;Okta_K2PROD_Users;Okta_Agent_Contact_Users;OKTA_Dashlane_IN_Users;Okta_Zoom_CNCO;Okta_OnshoreEvent_Users;";
  } else if (employee.selectedCountry === "SG") {
    defaultApp =
      "AAD_Sync;Okta_Intranet_SG_User;Okta_Litmos_SG_Users;Okta_Percipio_SG_Users;Okta_SwireConnect_SG_Users;Okta_Ideation_Portal_Users;Okta_Citrix_SG_Users;Okta_Concur_SG_Users;Okta_GiftsAndHospitality_Prod_Users;Okta_corp_philanthropy_Prod_Users;Okta_Data_Asset_Register_Prod;Okta_Zendesk_SS_KB_Prod_Users;Okta_ME_Users;Okta_VirtualGratitude_SG_Users;Okta_Coruson_Prod_users;Okta_Coruson_Train_users;Okta_condeco_prod;Okta_Ramco_Prod_Users;Okta_OnshoreSafety_Prod_Users;Okta_MediusFlow_users;Okta_K2Prod_Users;Okta_Agent_Contact_Users;OKTA_Dashlane_SG_Users; Okta_Zoom_CNCO;Okta_OnshoreEvent_Users;";
  }
  const copyText = `Full Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.emailAdd}\nADID: ${employee.adid}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nAddress: ${employee.address}\nZip Code: ${employee.zipCode}\nCity: ${employee.selectedCity}\n\nAdd to Members of Group in AD\n\n${defaultApp}
  `;

  return (
    <div className="emp-task">
      <p>
        Full Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email Address: {employee.emailAdd}</p>
      <p>ADID: {employee.adid}</p>
      <p>Job Title: {employee.jobTitle}</p>
      <p>Department: {employee.department}</p>
      <p>Manager: {employee.manager}</p>
      <p>Address: {employee.address}</p>
      <p>Zip Code: {employee.zipCode}</p>
      <p>City: {employee.selectedCity}</p>
      <p>Country: {employee.country}</p>

      <div className="default-apps"></div>

      <div>
        <CopyButton copyText={copyText} />
      </div>
    </div>
  );
};
export default ADTask;
