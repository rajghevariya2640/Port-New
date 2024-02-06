import React from "react";
import PNBigText18 from "./PNBigText18";
import PNGreyTxt from "./PNGreyTxt";
import PNButton from "./PNButton";
import { ReactComponent as Arrow } from "../assets/image/Home/svg/workArr.svg";

const PNTable = ({ tableClass, trClass, tableData, ...props }) => {
  return (
    <table className={`w-full ${tableClass ? tableClass : ""}`} {...props}>
      <tbody>
        {tableData?.map((tbl, tblIndex) => {
          return (
            <tr
              className={`py-4 sm:p-4 md:py-12 md:px-8 border-t-[1px] flex justify-between border-primary-100 ${
                trClass ? trClass : ""
              }`}
              key={tblIndex}
            >
              {tbl.head && (
                <td>
                  <PNBigText18 className="font-syne text-cstmGrey-100 font-semibold text-sm w-[90px] break-words md:w-[185px]">
                    {tbl.head}
                  </PNBigText18>
                </td>
              )}
              {tbl.info && (
                <td>
                  <PNGreyTxt className="xxl:max-w-[650px] text-sm md:text-base w-full">{tbl.info}</PNGreyTxt>
                </td>
              )}
              {tbl.date && (
                <td>
                  <PNBigText18 className="font-syne text-cstmGrey-100 font-semibold text-sm">
                    {tbl.date}
                  </PNBigText18>
                </td>
              )}
              {tbl.btn && (
                <td>
                  <PNButton
                    variant="link"
                    className="flex space-x-2 items-center !capitalize !text-primary-50"
                  >
                    {tbl.btn}
                    <Arrow className="stroke-primary-50 h-[18px]" />
                  </PNButton>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PNTable;
