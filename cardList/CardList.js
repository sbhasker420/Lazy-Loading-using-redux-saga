import React from "react";
import Card from "../Card/Card";
import "../card.css";
import "tachyons";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";

class CardList extends React.Component {
  state = {
    list: [],
    counter: 0,
    limit: 30
  };
  componentDidMount = () => {
    this.props.fetchData();
  };

  // onFetchData = () => {
  //   const { list, limit, counter } = this.props;
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${counter}`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         list: [...list, ...data],
  //         counter: counter + limit,
  //         limit: 10
  //       });
  //     });
  // };

  render() {
    const { list } = this.props;
    return (
      <div
        style={{ height: "600px", overflow: "auto" }}
        ref={ref => (this.scrollParentRef = ref)}
      >
        <InfiniteScroll
          pageStart={0}
          hasMore={true}
          useWindow={false}
          initialLoad={false}
          getScrollParent={() => this.scrollParentRef}
          loadMore={this.props.fetchData}
        >
          <div>
            {list.map((item, i) => {
              return (
                <Card
                  key={i}
                  url={item.url}
                  thumbnailUrl={item.thumbnailUrl}
                  id={item.id}
                  title={item.title}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //ctr: state.counter,
    // limit: state.limit,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch({ type: "FETCH_DATA" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);

//  || (element.top > 0 &&
//     element.top < document.documentElement.clientHeight &&
//     element.bottom > document.documentElement.clientHeight) ||
//   (element.top < 0 &&
//     element.bottom < document.documentElement.clientHeight)

// loadMoreData() {
//   while (true) {
//     //const targets = document.getElementsByClassName("card");
//     let pageBottom = document.getElementById("cardList").scrollHeight;
//     console.log(pageBottom);
//     if (pageBottom > document.documentElement.clientHeight + 50) break;
//     // document.body.insertAdjacentHTML("beforeend" , this.setState({photos:}) );
//   }
// }

//Return statement
// (
//   <div id="cardList">
// {photos.map((photo, i) => {
//   return (
//     <div key={i}>
//       <Card
//         url={photo.url}
//         thumbnailUrl={photo.thumbnailUrl}
//         id={photo.id}
//         title={photo.title}
//       />
//     </div>
//   );
// })}
//   </div>
// );

// pageStart={0}
//         loadMore={this.loadItems.bind(this)}
//         hasMore={this.state.hasMoreItems}
//         loader={loader}

//  handler() {
// if (
//   window.innerHeight + document.documentElement.scrollTop ===
//   document.documentElement.offsetHeight
// ) {
//   this.fetchData();
// }
//  }
