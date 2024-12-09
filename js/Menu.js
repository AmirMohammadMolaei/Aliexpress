MemuryHomeSubMenu = 0;
Home.onclick = function(){
    if(MemuryHomeSubMenu == 0){
        HomeSubMenu.style.opacity = "1";
        HomeSubMenu.style.visibility = "visible";
        Home.style.height = "auto";
        Home.style.padding = "12px 0 0";
        Home.style.backgroundPosition = "98% 6%";
        MemuryHomeSubMenu = 1;

        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        Kitchen.style.backgroundPosition = "98% 50%";
        
        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        Room.style.backgroundPosition = "98% 50%";

        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        Basics.style.backgroundPosition = "98% 50%";

        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        Garden.style.backgroundPosition = "98% 50%";

        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        More.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryHomeSubMenu == 1){
        Home.style.backgroundPosition = "98% 50%";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        MemuryHomeSubMenu = 0;
    }
}
MemuryKitchenSubMenu = 0;
Kitchen.onclick = function(){
    if(MemuryKitchenSubMenu == 0){
        Kitchen.style.backgroundPosition = "98% 6%";
        Kitchen.style.height = "auto";
        Kitchen.style.padding = "12px 0 0";
        KitchenSubMenu.style.opacity = "1";
        KitchenSubMenu.style.visibility = "visible";
        MemuryKitchenSubMenu = 1;

        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        Home.style.backgroundPosition = "98% 50%";

        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        Room.style.backgroundPosition = "98% 50%";

        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        Basics.style.backgroundPosition = "98% 50%";

        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        Garden.style.backgroundPosition = "98% 50%";

        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        More.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryKitchenSubMenu == 1){
        Kitchen.style.backgroundPosition = "98% 50%";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        MemuryKitchenSubMenu = 0;
    }
}
MemuryRoomSubMenu = 0;
Room.onclick = function(){
    if(MemuryRoomSubMenu == 0){
        Room.style.backgroundPosition = "98% 6%";
        Room.style.height = "auto";
        Room.style.padding = "12px 0 0";
        RoomSubMenu.style.opacity = "1";
        RoomSubMenu.style.visibility = "visible";
        MemuryRoomSubMenu = 1;

        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        Home.style.backgroundPosition = "98% 50%";

        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        Kitchen.style.backgroundPosition = "98% 50%";

        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        Basics.style.backgroundPosition = "98% 50%";

        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        Garden.style.backgroundPosition = "98% 50%";

        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        More.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryRoomSubMenu == 1){
        Room.style.backgroundPosition = "98% 50%";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        MemuryRoomSubMenu = 0;
    }
}
MemuryBasicsSubMenu = 0;
Basics.onclick = function(){
    if(MemuryBasicsSubMenu == 0){
        Basics.style.backgroundPosition = "98% 6%";
        Basics.style.height = "auto";
        Basics.style.padding = "12px 0 0";
        BasicsSubMenu.style.opacity = "1";
        BasicsSubMenu.style.visibility = "visible";
        MemuryBasicsSubMenu = 1;

        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        Home.style.backgroundPosition = "98% 50%";

        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        Kitchen.style.backgroundPosition = "98% 50%";

        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        Garden.style.backgroundPosition = "98% 50%";

        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        More.style.backgroundPosition = "98% 50%";

        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        Room.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryBasicsSubMenu == 1){
        Basics.style.backgroundPosition = "98% 50%";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        MemuryBasicsSubMenu = 0;
    }
}
MemuryGardenSubMenu = 0;
Garden.onclick = function(){
    if(MemuryGardenSubMenu == 0){
        Garden.style.backgroundPosition = "98% 6%";
        Garden.style.height = "auto";
        Garden.style.padding = "12px 0 0";
        GardenSubMenu.style.opacity = "1";
        GardenSubMenu.style.visibility = "visible";
        MemuryGardenSubMenu = 1;

        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        Home.style.backgroundPosition = "98% 50%";

        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        Kitchen.style.backgroundPosition = "98% 50%";

        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        More.style.backgroundPosition = "98% 50%";

        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        Room.style.backgroundPosition = "98% 50%";

        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        Basics.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryGardenSubMenu == 1){
        Garden.style.backgroundPosition = "98% 50%";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        MemuryGardenSubMenu = 0;
    }
}
MemuryMoreSubMenu = 0;
More.onclick = function(){
    if(MemuryMoreSubMenu == 0){
        More.style.backgroundPosition = "98% 6%";
        More.style.height = "auto";
        More.style.padding = "12px 0 0";
        MoreSubMenu.style.opacity = "1";
        MoreSubMenu.style.visibility = "visible";
        MemuryMoreSubMenu = 1;

        HomeSubMenu.style.opacity = "0";
        HomeSubMenu.style.visibility = "hidden";
        Home.style.height = "19px";
        Home.style.padding = "12px 10px 12px 24px";
        Home.style.backgroundPosition = "98% 50%";

        KitchenSubMenu.style.opacity = "0";
        KitchenSubMenu.style.visibility = "hidden";
        Kitchen.style.height = "19px";
        Kitchen.style.padding = "12px 10px 12px 24px";
        Kitchen.style.backgroundPosition = "98% 50%";

        BasicsSubMenu.style.opacity = "0";
        BasicsSubMenu.style.visibility = "hidden";
        Basics.style.height = "19px";
        Basics.style.padding = "12px 10px 12px 24px";
        Basics.style.backgroundPosition = "98% 50%";

        RoomSubMenu.style.opacity = "0";
        RoomSubMenu.style.visibility = "hidden";
        Room.style.height = "19px";
        Room.style.padding = "12px 10px 12px 24px";
        Room.style.backgroundPosition = "98% 50%";

        GardenSubMenu.style.opacity = "0";
        GardenSubMenu.style.visibility = "hidden";
        Garden.style.height = "19px";
        Garden.style.padding = "12px 10px 12px 24px";
        Garden.style.backgroundPosition = "98% 50%";
    }
    else if(MemuryMoreSubMenu == 1){
        More.style.backgroundPosition = "98% 50%";
        More.style.height = "19px";
        More.style.padding = "12px 10px 12px 24px";
        MoreSubMenu.style.opacity = "0";
        MoreSubMenu.style.visibility = "hidden";
        MemuryMoreSubMenu = 0;
    }
}