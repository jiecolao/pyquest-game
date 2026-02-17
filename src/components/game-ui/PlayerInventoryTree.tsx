import { Tree } from "react-arborist";

// RESTRICTIONS: Duplicate Files is not allowed
// 

const data = [
  {
    id: "User",
    name: "User",
    children: [
      {
        id: "Weapons",
        name: "Weapons",
        children: [
          { id: "sword.py", name: "sword.py" },
          { id: "bow.py", name: "bow.py" },
          { id: "bowe.py", name: "bowe.py" },
        ],
      },
      {
        id: "Armors",
        name: "Armors",
        children: [
        ]
      }
    ]
  }
];

export function PlayerInventoryTree(){
  return (
    <div className="relative h-full border">
      <div className="border-1">Toolbar</div>
      <Tree
        data={data}
        height={400}
        width={300}
      />
    </div>
  );
}
