import React from "react";
const Memo = React.memo(function MemoFunction({name}) {
    console.log("Memo component is Updating");
    return <p>Name : {name}</p>
})

export {Memo}

// MemoizedComponent will only re-render if the name prop changes,