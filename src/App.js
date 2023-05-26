import { React, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState({
    "photos":
      [
        { id: "one" },
        { id: "two" },
        { id: "three" }
      ],
    "columns": {
      "bank": {
        "taskIds": [
          "one",
          "two"
        ]
      },
      "used": {
        "taskIds": [
          "three",
          "four",
          "five"
        ]
      }
    }
  })

  const onBeforeCapture = () => {
    /*...*/
  };

  const onBeforeDragStart = () => {
    /*...*/
  };

  const onDragStart = () => {
    /*...*/
  };

  const onDragUpdate = () => {
    /*...*/
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result

    // not on a droppable
    if (!destination)
      return

    // same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return


    const newSourceCol = [...galleryPhotos.columns[source.droppableId].taskIds]
    newSourceCol.splice(source.index, 1)  // remove from OG idx

    const newGalleryPhotos = { ...galleryPhotos }
    newGalleryPhotos.columns[source.droppableId].taskIds = newSourceCol

    const newDestinationCol = [...galleryPhotos.columns[destination.droppableId].taskIds]
    newDestinationCol.splice(destination.index, 0, draggableId)
    newGalleryPhotos.columns[destination.droppableId].taskIds = newDestinationCol

    console.log(newGalleryPhotos)
    setGalleryPhotos(newGalleryPhotos)
  };

  // const Photo = ({ provided, snapshot, taskId, droppableId }) => {
  //   return (<div style={droppableId === "used" ? { background: 'lightblue' } : {}}>
  //     <p style={{ margin: "0" }}> Drag me! {taskId}</p>
  //   </div>)
  // }

  return <>
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >

      {Object.keys(galleryPhotos.columns).map((columnName) => (
        <Droppable droppableId={columnName}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'lightgrey' : 'white' }}
              {...provided.droppableProps}
              className="test-droppable"
            >
              <h1>{columnName}</h1>

              {galleryPhotos.columns[columnName].taskIds.map((taskId, index) =>
                <Draggable
                  key={taskId}
                  draggableId={taskId}
                  index={index}
                >
                  {(provided, snapshot) =>
                  (<div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* <Photo
                      provided={provided}
                      snapshot={snapshot}
                      taskId={taskId}
                      droppableId={columnName}
                    /> */}
                    <div style={columnName === "used" ? { background: 'lightblue' } : {}}>
                      <p style={{ margin: "0" }}> Drag me! {taskId}</p>
                    </div>
                  </div>)
                  }</Draggable>
              )}

              {provided.placeholder}
            </div>
          )}

        </Droppable>
      ))}




    </DragDropContext >
  </>
}

export default App
