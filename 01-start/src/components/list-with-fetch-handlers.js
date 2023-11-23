import List from "./list";
import compose from "../composeHelper";

import withListIsLoadingHandler from "../HOCs/withListIsLoadingHandler";
import withListNoDataHandler from "../HOCs/withListNoDataHandler";
import withListEmptyDataHandler from "../HOCs/withListEmptyDataHandler";

const ListWithFetchHandlers = compose(
  withListIsLoadingHandler,
  withListNoDataHandler,
  withListEmptyDataHandler
)(List);

export default ListWithFetchHandlers;