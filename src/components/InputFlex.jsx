import {PhoneSvg, ProfileSvg, EmailSvg, CardSvg, InfoCardSvg} from "./svg/index.jsx";

const svgList = {
    phone: <PhoneSvg/>,
    profile: <ProfileSvg/>,
    email: <EmailSvg/>,
    card: <CardSvg/>,
    info: <InfoCardSvg/>,
}

export default function InputFlex({ title, type, name, svg, sizeMD = false, length, ...rest}) {
  return (
    <div class={`flex flex-row items-center w-full ${sizeMD ? "max-w-54 md:max-w-40" : ""}`}>
      <div class="space-y-1.5 w-full bg-slate-100 px-2 rounded-md">
        <div>
          <div class="px-1 input-content w-full items-center justify-start flex flex-row">

            {svgList[svg] || null}

            <input
              class="h-12 rounded-md ml-1 pl-1 w-full bg-slate-100 focus:outline-none"
              required=""
              placeholder={title}
              type={type}
              name={name}
              maxlength={length || "100"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
