<?php 
require_once 'database.php';

$sql = "SELECT * FROM user_list";
$result = mysqli_query($conn, $sql);
?>

<?php 
if($result = $conn->query($sql)){
    foreach($result as $row){
?>
<tr>
    <td class="align-middle">
    <div
        class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
        <input type="checkbox" class="custom-control-input" id="item-<?php $row["id"]?>">
        <label class="custom-control-label" for="item-<?php echo $row["id"]?>"></label>
    </div>
    </td>
    <td class="text-nowrap align-middle"><?php echo $row["first_name"] . " " . $row["last_name"] ?></td>
    <td class="text-nowrap align-middle"><span><?php echo $row["role"]?> </span></td>
    <td class="text-center align-middle"><i class="fa fa-circle <?php if($row["status"] == 1) echo "active"; else echo "not-active"  ?>-circle"></i></td>
    <td class="text-center align-middle">
    <div class="btn-group align-top">
        <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"
        data-target="#user-form-modal">Edit</button>
        <button class="btn btn-sm btn-outline-secondary badge" type="button"><i
            class="fa fa-trash"></i></button>
    </div>
    </td>
</tr>

<?php 
    }
}
?>