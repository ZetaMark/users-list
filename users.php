<?php 
require_once 'Database/database.php';

$sql = "SELECT * FROM user_list";
$result = mysqli_query($conn, $sql);
?>
<?php 
if($result = $conn->query($sql)){
    foreach($result as $row){
?>
<tr id="row-<?php echo $row["id"] ?>">
    <td class="align-middle">
    <div
        class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
        <input data-id="<?php echo $row["id"]?>" id="checkbox-<?php echo $row["id"]?>" type="checkbox" class="custom-control-input row-checkbox">
        <label class="custom-control-label" for="checkbox-<?php echo $row["id"]?>"></label>
    </div>
    </td>
    <td data-first-name="<?php echo $row["first_name"]?>" data-last-name="<?php echo $row["last_name"]?>" id="name-<?php echo $row["id"]?>" class="text-nowrap align-middle"><?php echo $row["first_name"] . " " . $row["last_name"] ?></td>
    <td class="text-nowrap align-middle"><span id="role-<?php echo $row["id"]?>"><?php echo $row["role"]?></span></td>
    <td data-status="<?php echo $row["status"] ?>" id="status-<?php echo $row["id"]?>" class="text-center align-middle"><i id="status-circle-<?php echo $row["id"]?>" class="fa fa-circle <?php if($row["status"] == 1) echo "active"; else echo "not-active"?>-circle"></i></td>
    <td class="text-center align-middle">
    <div class="btn-group align-top">
        <button data-id="<?php echo $row["id"] ?>" class="btn btn-sm btn-outline-secondary badge edit-user" type="button" data-toggle="modal"
        data-target="#user-form-modal">Edit</button>
        <button  data-id="<?php echo $row["id"] ?>" data-toggle="modal"
        data-target="#confirm-delete-modal" class="btn btn-sm btn-outline-secondary badge call-modal-delete-user" type="button"><i data-status="<?php echo $row["status"] ?>" data-id="<?php echo $row["id"]?>" data-toggle="modal"
        data-target="#confirm-delete-modal"
         class="fa fa-trash "></i></button>
    </div>
    </td>
</tr>

<?php 
    }
}

?>