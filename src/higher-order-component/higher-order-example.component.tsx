import {memo} from "react";
import {withDateInUtc} from "./with-date-in-utc-hoc";
import {LowerOrderComponentMore} from "./lower-order-more.component";
import {LowerOrderComponent} from "./lower-order.component";


const MyWithDateInUtc = withDateInUtc(LowerOrderComponent);
const MyWithDateInUtcMore = withDateInUtc(LowerOrderComponentMore);


const HigherOrderExampleComponent = memo(() => {
    return <>
        <MyWithDateInUtc/>
        <br />
        <MyWithDateInUtcMore />
    </>
})


export default HigherOrderExampleComponent;
