import React from "react";

function Wireframe (props: {
    
    height: number
   } ) {

    const pixelHeigth = props.height+ 'px'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={pixelHeigth}
    >
      <path
        fill="#EEE"
        d="M512 0L512 512 478.242 512 399.473 256 478.242 0z"
      ></path>
      <path fill="#FFF" d="M0 0H478.242V512H0z"></path>
      <path
        fill="#FE5F1A"
        d="M478.242 33.758L478.242 67.516 444.484 67.516 414.312 50.637 444.484 33.758z"
      ></path>
      <path fill="#FE834D" d="M33.758 33.758H444.483V67.516H33.758z"></path>
      <path
        fill="#81E3E2"
        d="M478.242 361.964L478.242 478.242 444.484 478.242 414.312 420.102 444.484 361.964z"
      ></path>
      <path
        fill="#ABECEC"
        d="M33.758 361.967H444.483V478.24199999999996H33.758z"
      ></path>
      <g fill="#969696">
        <path d="M318.827 269.129H193.173a8.44 8.44 0 01-8.44-8.44 8.44 8.44 0 018.44-8.44h125.655a8.44 8.44 0 11-.001 16.88zM478.242 269.129H352.586a8.44 8.44 0 01-8.44-8.44 8.44 8.44 0 018.44-8.44h125.656a8.44 8.44 0 018.44 8.44 8.44 8.44 0 01-8.44 8.44zM159.414 269.129H33.758a8.44 8.44 0 01-8.44-8.44 8.44 8.44 0 018.44-8.44h125.656a8.44 8.44 0 018.44 8.44 8.44 8.44 0 01-8.44 8.44zM318.827 302.887H193.173c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h125.655c4.662 0 8.44 3.778 8.44 8.44s-3.778 8.44-8.441 8.44zM478.242 302.887H352.586c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h125.656c4.662 0 8.44 3.778 8.44 8.44s-3.778 8.44-8.44 8.44zM159.414 302.887H33.758c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h125.656c4.662 0 8.44 3.778 8.44 8.44s-3.778 8.44-8.44 8.44zM256.188 336.645h-63.015c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h63.015c4.662 0 8.44 3.778 8.44 8.44s-3.778 8.44-8.44 8.44zM415.601 336.645h-63.015c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h63.015c4.662 0 8.44 3.778 8.44 8.44s-3.778 8.44-8.44 8.44zM96.774 336.645H33.758c-4.662 0-8.44-3.778-8.44-8.44s3.778-8.44 8.44-8.44h63.015c4.662 0 8.44 3.778 8.44 8.44s-3.777 8.44-8.439 8.44z"></path>
      </g>
      <g fill="#42C8C6">
        <path d="M327.225 100.439c-.011-.114-.033-.225-.048-.338-.022-.16-.042-.321-.073-.478-.027-.135-.064-.266-.097-.398-.034-.135-.063-.27-.104-.403-.041-.132-.089-.258-.135-.387-.047-.131-.09-.262-.143-.392-.05-.12-.109-.236-.164-.354-.062-.132-.12-.264-.19-.394-.06-.111-.128-.217-.192-.326-.077-.128-.149-.258-.233-.383-.078-.117-.165-.226-.249-.338-.081-.109-.156-.219-.243-.325a8.19 8.19 0 00-.468-.518c-.032-.032-.057-.068-.089-.099-.03-.029-.063-.055-.093-.084a8.715 8.715 0 00-.524-.474c-.098-.081-.203-.151-.303-.226-.119-.09-.237-.182-.361-.266-.116-.078-.236-.144-.356-.216-.117-.071-.233-.144-.354-.209-.118-.063-.239-.116-.359-.173-.129-.062-.258-.126-.392-.181-.114-.047-.231-.084-.345-.127-.144-.052-.287-.107-.434-.152-.113-.034-.227-.059-.341-.088-.153-.039-.305-.082-.461-.113-.125-.025-.251-.038-.376-.057-.146-.022-.291-.05-.441-.064a8.714 8.714 0 00-.627-.032c-.068-.001-.133-.01-.2-.01H193.173c-.07 0-.138.009-.208.01a7.546 7.546 0 00-.619.032c-.15.015-.295.042-.442.064-.125.019-.25.033-.375.057-.155.03-.306.072-.458.111-.115.029-.231.054-.344.089-.145.044-.286.098-.428.15-.118.043-.236.081-.353.129-.132.055-.259.118-.387.18-.122.057-.243.111-.361.174-.122.065-.237.14-.356.21s-.239.138-.354.215c-.125.083-.242.176-.361.266-.101.075-.205.145-.304.226-.182.15-.356.309-.524.474-.03.029-.063.054-.093.084-.032.032-.059.068-.089.099a8.19 8.19 0 00-.468.518c-.087.106-.162.216-.243.325-.083.113-.171.222-.249.338-.083.125-.156.255-.233.383-.064.108-.133.214-.192.326-.07.129-.128.263-.191.396-.055.117-.114.232-.163.352-.054.129-.098.262-.144.395-.046.128-.095.254-.135.385-.04.133-.07.268-.104.403-.033.133-.071.262-.097.398-.032.159-.051.318-.073.478-.016.113-.037.224-.048.338-.028.28-.043.56-.042.842v125.645c0 .281.015.561.042.842.011.114.033.225.048.338.023.16.042.321.073.478.027.135.064.266.097.398.034.135.063.27.104.403.039.131.089.257.135.385.047.133.091.266.144.395.05.119.108.234.163.351.062.133.122.267.191.397.06.111.128.217.192.326.077.128.149.258.233.383.078.117.165.226.249.338.081.109.156.219.243.325.147.18.306.351.468.518.032.032.057.068.089.099.03.029.063.055.093.084.169.164.342.324.524.474.099.081.203.151.304.227.119.09.236.182.361.266.117.078.239.145.359.217.117.07.231.143.351.208.122.064.246.119.369.178.126.06.25.122.379.176.12.05.243.09.366.134.137.05.273.102.414.144.122.037.245.064.367.095.144.037.287.077.433.106.144.028.288.045.433.066.127.019.253.043.381.055.277.027.555.042.833.042h125.655c.278 0 .556-.015.833-.042.129-.012.254-.037.381-.055.145-.021.289-.037.433-.066.146-.029.289-.07.433-.106.123-.03.246-.057.367-.095.141-.043.278-.095.415-.145.122-.044.244-.083.365-.133.129-.054.254-.117.38-.177.123-.059.248-.113.369-.177.12-.065.234-.138.351-.208.12-.072.242-.14.359-.217.125-.083.241-.176.361-.266.101-.075.205-.146.304-.227.182-.15.356-.309.524-.474.03-.029.063-.054.093-.084.032-.032.059-.068.089-.099a8.19 8.19 0 00.468-.518c.087-.106.162-.216.243-.325.083-.113.171-.222.249-.338.083-.125.156-.255.233-.383.064-.108.133-.214.192-.326.07-.129.128-.262.19-.395.055-.117.114-.233.164-.353.054-.129.097-.261.144-.393.046-.128.096-.255.135-.386.041-.133.07-.268.104-.403.033-.133.071-.262.097-.398.032-.159.051-.318.073-.478.016-.113.037-.224.048-.338.028-.28.043-.56.042-.842V101.28c0-.281-.015-.561-.042-.841zm-83.161 63.663l-42.452 42.452V121.65l42.452 42.452zm-30.516-54.388h84.903L256 152.166l-42.452-42.452zM256 176.039l42.452 42.452h-84.903L256 176.039zm11.936-11.937l42.452-42.452v84.904l-42.452-42.452zM485.01 231.957c.083-.113.171-.222.249-.338.083-.125.156-.255.233-.383.064-.108.133-.214.192-.326.07-.129.128-.262.19-.395.055-.117.114-.233.164-.353.054-.129.097-.261.144-.393.046-.128.096-.255.135-.386.041-.133.07-.268.104-.403.033-.133.071-.262.097-.398.032-.159.051-.318.073-.478.016-.113.037-.224.048-.338.028-.28.043-.56.043-.842V101.28c0-.281-.015-.562-.043-.842-.011-.114-.033-.225-.048-.338-.022-.16-.042-.321-.073-.478-.027-.135-.064-.266-.097-.398-.034-.135-.063-.27-.104-.403-.039-.132-.089-.258-.135-.387-.047-.131-.09-.262-.143-.392-.049-.12-.109-.236-.164-.354-.062-.132-.12-.264-.19-.394-.06-.111-.128-.217-.192-.326-.077-.128-.149-.258-.233-.383-.078-.117-.165-.226-.249-.338-.081-.109-.156-.219-.243-.325a8.19 8.19 0 00-.468-.518c-.032-.032-.057-.068-.089-.099-.03-.029-.063-.055-.093-.084a8.715 8.715 0 00-.524-.474c-.098-.081-.201-.151-.303-.226-.119-.09-.237-.182-.361-.266-.117-.078-.236-.144-.356-.216-.117-.071-.233-.144-.354-.209-.118-.063-.239-.116-.359-.173-.129-.062-.258-.126-.392-.181-.114-.047-.231-.084-.345-.127-.144-.052-.287-.107-.434-.152-.113-.034-.227-.059-.341-.088-.153-.039-.305-.082-.461-.113-.125-.025-.25-.038-.376-.057-.146-.022-.291-.05-.441-.064a8.716 8.716 0 00-.626-.032c-.068-.001-.133-.01-.2-.01H352.586c-.068 0-.133.009-.2.01a7.765 7.765 0 00-.627.032c-.15.015-.294.042-.441.064-.125.019-.251.033-.376.057-.156.03-.308.073-.461.113-.114.029-.228.053-.341.088-.147.045-.289.099-.433.152-.116.042-.233.08-.347.127-.133.055-.261.119-.39.181-.12.057-.242.11-.36.173-.122.065-.236.138-.354.209-.119.071-.24.138-.356.216-.125.083-.242.177-.361.266-.101.075-.205.145-.303.226-.182.15-.356.309-.524.474-.03.029-.063.054-.093.084-.032.032-.059.068-.089.099a8.19 8.19 0 00-.468.518c-.087.106-.162.216-.243.325-.083.113-.171.222-.249.338-.083.125-.156.255-.233.383-.064.108-.133.214-.192.326-.07.129-.128.263-.191.396-.055.117-.114.232-.163.352-.054.129-.098.262-.144.395-.046.128-.095.254-.135.385-.041.133-.07.268-.104.403-.033.133-.071.262-.097.398-.032.159-.051.318-.073.478-.016.113-.037.224-.048.338-.028.28-.043.56-.042.842v125.645c0 .281.015.561.042.842.011.114.033.225.048.338.022.16.042.321.073.478.027.135.064.266.097.398.034.135.063.27.104.403.039.131.089.257.135.385.047.133.091.266.144.395.05.119.108.234.163.351.062.133.122.267.191.397.06.111.128.217.192.326.077.128.149.258.233.383.078.117.165.226.249.338.081.109.156.219.243.325.147.18.306.351.468.518.032.032.057.068.089.099.03.029.063.055.093.084.169.164.342.324.524.474.099.081.203.151.304.227.119.09.236.182.361.266.117.078.239.145.359.217.117.07.231.143.351.208.122.064.246.119.369.178.126.06.25.122.379.176.12.05.243.09.366.134.137.05.273.102.414.144.122.037.245.064.367.095.144.037.287.077.433.106.144.028.288.045.433.066.127.019.253.043.381.055.277.027.555.042.833.042h125.656c.278 0 .556-.015.833-.042.129-.012.254-.037.381-.055.144-.021.289-.037.433-.066.146-.029.289-.07.433-.106.123-.03.246-.057.367-.095.141-.043.278-.095.415-.145.122-.044.244-.083.365-.133.129-.054.254-.117.38-.177.123-.059.248-.113.368-.177.12-.065.234-.138.351-.208.12-.072.242-.14.359-.217.125-.083.241-.176.361-.266.101-.075.205-.146.304-.227.182-.15.356-.309.524-.474.03-.029.063-.054.093-.084.032-.032.059-.068.089-.099.162-.167.32-.338.468-.518.088-.108.163-.22.244-.328zm-81.533-67.855l-42.452 42.452V121.65l42.452 42.452zm-30.516-54.388h84.904l-42.452 42.452-42.452-42.452zm42.452 66.325l42.452 42.452h-84.904l42.452-42.452zm11.937-11.937l42.452-42.452v84.904l-42.452-42.452zM167.811 100.439c-.011-.114-.033-.225-.048-.338-.023-.16-.042-.321-.073-.478-.027-.135-.064-.266-.097-.398-.034-.135-.063-.27-.104-.403-.04-.132-.089-.258-.135-.387-.047-.131-.09-.262-.143-.392-.05-.12-.109-.236-.164-.354-.062-.132-.12-.264-.19-.394-.06-.111-.128-.217-.192-.326-.077-.128-.149-.258-.233-.383-.078-.117-.165-.226-.249-.338-.081-.109-.156-.219-.243-.325a8.19 8.19 0 00-.468-.518c-.032-.032-.057-.068-.089-.099-.03-.029-.063-.055-.093-.084a8.715 8.715 0 00-.524-.474c-.098-.081-.203-.151-.303-.226-.119-.09-.237-.182-.361-.266-.116-.078-.236-.144-.356-.216-.117-.071-.233-.144-.354-.209-.118-.063-.239-.116-.359-.173-.129-.062-.258-.126-.392-.181-.114-.047-.231-.084-.345-.127-.144-.052-.287-.107-.434-.152-.113-.034-.227-.059-.341-.088-.153-.039-.305-.082-.461-.113-.125-.025-.251-.038-.376-.057-.146-.022-.291-.05-.441-.064a8.714 8.714 0 00-.627-.032c-.068-.001-.133-.01-.2-.01H33.758c-.068 0-.133.009-.2.01a7.765 7.765 0 00-.627.032c-.15.015-.294.042-.441.064-.125.019-.251.033-.376.057-.156.03-.308.073-.461.113-.114.029-.228.053-.341.088-.147.045-.289.099-.433.152-.116.042-.233.08-.347.127-.133.055-.261.119-.39.181-.12.057-.242.11-.36.173-.122.065-.236.138-.354.209-.119.071-.24.138-.356.216-.125.083-.242.177-.361.266-.101.075-.205.145-.303.226-.182.15-.356.309-.524.474-.03.029-.063.054-.093.084-.032.032-.059.068-.089.099a8.19 8.19 0 00-.468.518c-.087.106-.162.216-.243.325-.083.113-.171.222-.249.338-.083.125-.156.255-.233.383-.064.108-.133.214-.192.326-.07.129-.128.263-.191.396-.055.117-.114.232-.163.352-.054.129-.098.262-.144.395-.046.128-.095.254-.135.385-.041.133-.07.268-.104.403-.033.133-.071.262-.097.398-.032.159-.051.318-.073.478-.016.113-.037.224-.048.338-.028.28-.043.56-.042.842v125.645c0 .281.015.561.042.842.011.114.033.225.048.338.023.16.042.321.073.478.027.135.064.266.097.398.034.135.063.27.104.403.039.131.089.257.135.385.047.133.091.266.144.395.05.119.108.234.163.351.062.133.122.267.191.397.06.111.128.217.192.326.077.128.149.258.233.383.078.117.165.226.249.338.081.109.156.219.243.325.147.18.306.351.468.518.032.032.057.068.089.099.03.029.063.055.093.084.169.164.342.324.524.474.099.081.203.151.304.227.119.09.236.182.361.266.117.078.239.145.359.217.117.07.231.143.351.208.122.064.246.119.369.178.126.06.25.122.379.176.12.05.243.09.366.134.137.05.273.102.414.144.122.037.245.064.367.095.144.037.287.077.433.106.144.028.288.045.433.066.127.019.253.043.381.055.277.027.555.042.833.042h125.656c.278 0 .556-.015.833-.042.129-.012.254-.037.381-.055.145-.021.289-.037.433-.066.146-.029.289-.07.433-.106.123-.03.246-.057.367-.095.141-.043.278-.095.415-.145.122-.044.244-.083.365-.133.129-.054.254-.117.38-.177.123-.059.248-.113.369-.177.12-.065.234-.138.351-.208.12-.072.242-.14.359-.217.125-.083.241-.176.361-.266.101-.075.205-.146.304-.227.182-.15.356-.309.524-.474.03-.029.063-.054.093-.084.032-.032.059-.068.089-.099a8.19 8.19 0 00.468-.518c.087-.106.162-.216.243-.325.083-.113.171-.222.249-.338.083-.125.156-.255.233-.383.064-.108.133-.214.192-.326.07-.129.128-.262.19-.395.055-.117.114-.233.164-.353.054-.129.097-.261.144-.393.046-.128.096-.255.135-.386.04-.133.07-.268.104-.403.033-.133.071-.262.097-.398.032-.159.051-.318.073-.478.016-.113.037-.224.048-.338.028-.28.043-.56.042-.842V101.28a8.152 8.152 0 00-.042-.841zM84.65 164.102l-42.452 42.453v-84.904l42.452 42.451zm-30.516-54.388h84.904l-42.452 42.452-42.452-42.452zm42.452 66.325l42.452 42.452H54.134l42.452-42.452zm11.937-11.937l42.452-42.452v84.904l-42.452-42.452z"></path>
      </g>
    </svg>
  );
}

export default Wireframe;
