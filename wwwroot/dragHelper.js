window.dragHelper = {
    setDragData: function (e, type) {
        e.dataTransfer.setData("tool-type", type);
    }
};
